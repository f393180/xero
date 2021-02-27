'use_strict';

$(() => {
  console.log('loaded...');
  $('#exampleModal').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const index = button.data('version-id');
    const modal = $(this);
    console.log(historyData[index]);
    modal.find('#modal-id').val(historyData[index]['opd_bill_id']);
    modal.find('#modal-version').val(index);
    modal.find('#modal-timestamp').val(historyData[index]['updated_on']);
    modal.find('#modal-username').val(historyData[index]['updated_by']);
    modal.find('#modal-date').val(historyData[index]['bill_date']);
    modal.find('#modal-status').val(historyData[index]['bill_status']);
    modal.find('#modal-consulting-charge').val(historyData[index]['consulting_charge']);
    modal.find('#modal-medication-charge').val(historyData[index]['medication_charge']);
    modal.find('#modal-dressing-charge').val(historyData[index]['dressing_charge']);
    modal.find('#modal-other-charge').val(historyData[index]['other_charge']);
    modal.find('#modal-patient-first-name').val(historyData[index]['patient_first_name']);
    modal.find('#modal-patient-last-name').val(historyData[index]['patient_last_name']);
    modal.find('#modal-company-name').val(historyData[index]['company_name']);
    modal.find('#modal-street-address').val(historyData[index]['street_address']);
    modal.find('#modal-area').val(historyData[index]['area']);
    modal.find('#modal-notes').val(historyData[index]['notes']);
  });
});


const clearModalFields = () => {
  $('#modal-id').val('');
  $('#modal-version').val('');
  $('#modal-timestamp').val('');
  $('#modal-username').val('');
  $('#modal-date').val('');
  $('#modal-status').val('');
  $('#modal-consulting-charge').val('');
  $('#modal-medication-charge').val('');
  $('#modal-dressing-charge').val('');
  $('#modal-other-charge').val('');
  $('#modal-patient-first-name').val('');
  $('#modal-patient-last-name').val('');
  $('#modal-company-name').val('');
  $('#modal-street-address').val('');
  $('#modal-area').val('');
  $('#modal-notes').val('');
};
