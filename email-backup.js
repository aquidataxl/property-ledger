/* Downloads a complete backup, then opens a pre-addressed email draft. */
(() => {
  const recipient='arasharef@gmail.com';
  document.querySelector('#emailBackup').addEventListener('click',()=>{
    const date=new Date().toISOString().slice(0,10);
    const backup={version:3,exportedAt:new Date().toISOString(),data,forecasts,mikeEntries};
    const fileName=`property-ledger-backup-${date}.json`;
    const link=document.createElement('a');
    link.href=URL.createObjectURL(new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}));
    link.download=fileName;
    link.click();
    setTimeout(()=>URL.revokeObjectURL(link.href),1000);
    const subject=encodeURIComponent(`Property Ledger backup — ${date}`);
    const body=encodeURIComponent(`Your backup has been downloaded as ${fileName}.\n\nPlease attach that file to this email before sending it.\n\nTo restore it on another device, download the attachment and use Import backup in Property Ledger.`);
    window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
  });
})();
