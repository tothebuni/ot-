
    // F1 ถ้าใส่ตัวเลข >=21.00 =  150
    function otmonney(intimeotId, outmonneyId) {
        let ottime = document.getElementById(intimeotId);
        let moni = document.getElementById(outmonneyId);
        let onlynum = parseFloat(ottime.value);
        // 
        if (onlynum >= 21.00) {
            moni.value = 150;
        } else {
            moni.value = '0';
        }
        // Update the total sum
        updateSum();
    }
    //F2 หาผลรวม
    function updateSum() {
        let mon1 = parseFloat(document.getElementById('outmonney1').value) || 0;
        let mon2 = parseFloat(document.getElementById('outmonney2').value) || 0;
        let mon3 = parseFloat(document.getElementById('outmonney3').value) || 0;
        let mon4 = parseFloat(document.getElementById('outmonney4').value) || 0;
        let mon5 = parseFloat(document.getElementById('outmonney5').value) || 0;
        let mon6 = parseFloat(document.getElementById('outmonney6').value) || 0;
        let mon7 = parseFloat(document.getElementById('outmonney7').value) || 0;
        let mon8 = parseFloat(document.getElementById('outmonney8').value) || 0;
    
        let totalSum = mon1 + mon2 + mon3 + mon4 + mon5 + mon6 + mon7 + mon8;
        document.getElementById('sum').textContent = "รวมเป็นเงินทั้งสิ้น: " + totalSum +" บาท";
        }
    
    function savePDF() {
            // 
            const options = {
                filename: 'asa.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
    
            // 
            html2pdf().from(document.body).set(options).save();
        }