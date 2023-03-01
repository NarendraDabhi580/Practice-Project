import React from "react";

const emojiArr = ['   🌝   ', '   👍   ', '   🥉   ', '   👎   '];

const SlotM = () => {
    const slotArr = [];
    var maxLimit = emojiArr.length - 1;
    for (let index = 0; index <= maxLimit; index++) {

        var x = Math.round(Math.random() * maxLimit); //0
        var y = Math.round(Math.random() * maxLimit); //2
        var z = Math.round(Math.random() * maxLimit); //1
        console.log(x);
        console.log(y);
        console.log(z);

        var slot = ((emojiArr[x] == emojiArr[y]) && (emojiArr[y] == emojiArr[z])) ?
            (
                <>
                    <div style={{ margin: "10px", textAlign: "center" }}>
                        {emojiArr[x]}   {emojiArr[y]}   {emojiArr[z]}
                        <p>Match Found You win!!</p>
                    </div>
                </>
            )
            :
            (
                <>
                    <div style={{ margin: "10px", textAlign: "center" }}>
                        {emojiArr[x]}   {emojiArr[y]}   {emojiArr[z]}
                        <p>Match Not found!!!!!!!!</p>
                    </div>
                </>
            )


        slotArr.push(slot);
    }

    return slotArr;
};

export default SlotM;