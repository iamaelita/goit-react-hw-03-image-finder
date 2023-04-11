import { getHits } from 'tools/apiGet';
import Notiflix from 'notiflix';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    hitsImg: [],
    searchString: '',
    pageNumber: 1,
    isLoaded: false,
    largeImageURL: '',
  };

  searhParams = {
    searchUrlString: '',
    pageUrlNumber: 1,
    totalUrlPages: 1,
    numUrlPerSearch: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchString, pageNumber } = this.state;
    if (
      prevState.searchString !== searchString ||
      prevState.pageNumber !== pageNumber
    ) {
      this.setState({ isLoaded: true });

      this.searhParams.searchUrlString = searchString;
      this.searhParams.pageUrlNumber = pageNumber;

      try {
        if (
          !this.searhParams.searchUrlString ||
          this.searhParams.searchUrlString === '*'
        )
          throw new Error('Введіть текст у поле пошуку');

        const hits = await getHits(this.searhParams);

        if (!hits.actualTotalHits) throw new Error(hits.message);

        const { actualTotalHits, hitsImg } = hits;

        this.searhParams.totalUrlPages = Math.ceil(
          actualTotalHits / this.searhParams.numUrlPerSearch
        );
        if (pageNumber < 2)
          Notiflix.Notify.info(`Знайдено ${actualTotalHits} зображень `);

        this.setState(prevState => ({
          hitsImg: [...prevState.hitsImg, ...hitsImg],
        }));
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        this.setState({ isLoaded: false });
      }
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    const searchString = evt.currentTarget.elements.searchString;
    if (!searchString.value || searchString.value === '*') {
      searchString.value = '*';
      if (this.state.searchString === '*') searchString.value = '';
    }

    this.setState({
      searchString: searchString.value,
      hitsImg: [],
      pageNumber: 1,
    });

    this.searhParams.totalUrlPages = 1;
    searchString.value = '';
  };

  loadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  getImgId = id => {
    const largeImageURL = this.state.hitsImg.find(
      hit => hit.id === id
    ).largeImageURL;
    this.setState({
      largeImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      largeImageURL: '',
    });
  };

  render() {
    const { isLoaded, pageNumber, hitsImg, largeImageURL } = this.state;
    const showLoadMore = this.searhParams.totalUrlPages > pageNumber;
    const showGallery = hitsImg.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {showGallery && (
          <ImageGallery imageHits={hitsImg} getItemId={this.getImgId} />
        )}
        {isLoaded ? (
          <Loader />
        ) : (
          showLoadMore && <Button loadMore={this.loadMore} />
        )}
        {largeImageURL && (
          <Modal image={largeImageURL} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
