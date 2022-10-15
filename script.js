var answers = {};
    function recordAnswers(qno, ans, nqno) { 
        if (nqno!=1) {
            answers[qno] = ans;   //record answer using bracket notation to record answer
        }
        if (nqno > 0) {
            $('.row').removeClass("active");
            $('.q' + nqno).addClass("active");    // removes displaying modal and brings next modal
        }
        else {
            let q1 = answers[1];
            let q2 = answers[2];
            let q3 = answers[3];
            let q4 = answers[4];
            let q5 = answers[5];
            let q6 = answers[6];
            let q7 = answers[7];
            let q8 = answers[8];
            let q9 = answers[9];
            let q10 = answers[10];      // storing required value in variable

            if((q1,q2,q4,q6,q8,q9==1) && (q3,q5,q7,q10==1 || 2)) { // determine result
                $('.row').removeClass("active");
                $('.result1').addClass("active");
            }
            else if((q1,q2,q4==1) && (q3,q5,q6,q7,q8,q9,q10==1 || 2)) {
                $('.row').removeClass("active");
                $('.result2').addClass("active");
            }
            else {
                $('.row').removeClass("active");
                $('.result3').addClass("active");
            }
        }
}

