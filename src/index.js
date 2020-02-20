import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views';

renderNotes();

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = createNote();
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderNotes();
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    });
    renderNotes();
});

window.addEventListener('storage', (e) => {
  if ( e.key === 'notes' ) {
    renderNotes();
  }
});

// const now = moment();
// now.subtract(1, 'week').subtract(20, 'days');
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());

// const birth = moment();
// birth.year(1992).month(10).date(26);
// console.log(birth.format('MMM D, YYYY'));