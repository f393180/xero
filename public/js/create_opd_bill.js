/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-console */
$(() => {
  const isFormValid = () => true;

  $('#create-opd-draft').on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    $('#opd-bill-form').trigger('submit');
  });

  $('#create-opd-save').on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFormValid()) {
      $('#opd-bill-form').trigger('submit');
    }
  });
});
