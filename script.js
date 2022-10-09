const addMore = document.getElementById("addMore");
const form = document.getElementById("form");
const deleteBtn = document.getElementById("btn");
const submitBtn = document.getElementById("submitBtn");
const select = document.querySelector("select");
const wrap = document.querySelector(".wrap");

let add = `<div class="correction-area">
          <div class="sub">
            <div class="sub-text">বিষয়</div>
            <div class="sub-option">
              <select>
                <option value="-1">---নির্বাচন করুন---</option>
                <option value="personNameBn">নাম বাংলায়</option>
                <option value="personNameEn">নাম ইংরেজিতে</option>
                <option value="personBirthDate">জন্ম তারিখ (খ্রিঃ)</option>
                <option value="thChild">পিতা ও মাতার কততম সন্তান</option>
                <option value="gender">লিঙ্গ</option>
                <option value="fatherNameBn">পিতার নাম (বাংলা)</option>
                <option value="motherNameBn">মাতার নাম (বাংলা)</option>
                <option value="fatherNameEn">পিতার নাম (ইংরেজি)</option>
                <option value="motherNameEn">মাতার নাম (ইংরেজি)</option>
                <option value="personFirstNameBn">
                  নামের প্রথম অংশ বাংলায়
                </option>
                <option value="personLastNameBn">নামের শেষ অংশ বাংলায়</option>
                <option value="personFirstNameEn">
                  নামের প্রথম অংশ ইংরেজি
                </option>
                <option value="personLastNameEn">নামের শেষ অংশ ইংরেজি</option>
                <option value="personNationality">জাতীয়তা</option>
                <option value="personNid">এন আই ডি</option>
              </select>
            </div>
          </div>
          <div class="corr-info">
            <div class="corr-resone">চাহিত সংশোধিত তথ্য</div>
            <div class="corr-input">
              <input type="text" />
            </div>
          </div>
          <div class="why-corr">
            <div class="why-corr-title">সংশোধনের কারণ</div>
            <div class="why-corr-input">
              <select>
                <option value="-1">---নির্বাচন করুন---</option>
                <option value=" errorRecorded">ভুল লিপিবদ্ধ করা হয়েছিল</option>
              </select>
            </div>
          </div>
          <div class="deletBtn">
            <button id="btn">Delete</button>
          </div>
        </div>`;
addMore.addEventListener("click", function (e) {
  e.preventDefault();
  wrap.innerHTML += add;
});

form.addEventListener("submit", function (e) {
  if (e.submitter.matches("#addMore")) {
    e.preventDefault();
  }

  e.preventDefault();
  console.log("hello");
});
deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  wrap.remove(wrap.childNodes[1]);

  console.log("click");
});
