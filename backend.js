const suralar =["",
    "Al-Fatihah الفاتحة", "Al-Baqarah البقرة", "Aal-E-Imran آل عمران", "An-Nisa النساء", "Al-Maidah المائدة", "Al-An'am الأنعام", "Al-A'raf الأعراف", "Al-Anfal الأنفال", "At-Tawbah التوبة", "Yunus يونس", 
    "Hud هود", "Yusuf يوسف", "Ar-Ra'd الرعد", "Ibrahim إبراهيم", "Al-Hijr الحجر", "An-Nahl النحل", "Al-Isra الإسراء", "Al-Kahf الكهف", "Maryam مريم", "Ta-Ha طه", "Al-Anbiya الأنبياء", "Al-Hajj الحج", 
    "Al-Mu’minun المؤمنون", "An-Nur النور", "Al-Furqan الفرقان", "Ash-Shu'ara الشعراء", "An-Naml النمل", "Al-Qasas القصص", "Al-Ankabut العنكبوت", "Ar-Rum الروم", "Luqman لقمان", "As-Sajda السجدة", 
    "Al-Ahzab الأحزاب", "Saba سبأ", "Fatir فاطر", "Ya-Sin يس", "As-Saffat الصافات", "Sad ص", "Az-Zumar الزمر", "Ghafir غافر", "Fussilat فصلت", "Ash-Shura الشورى", "Az-Zukhruf الزخرف", 
    "Ad-Dukhan الدخان", "Al-Jathiya الجاثية", "Al-Ahqaf الأحقاف", "Muhammad محمد", "Al-Fath الفتح", "Al-Hujurat الحجرات", "Qaf ق", "Adh-Dhariyat الذاريات", "At-Tur الطور", "An-Najm النجم", 
    "Al-Qamar القمر", "Ar-Rahman الرحمن", "Al-Waqia الواقعة", "Al-Hadid الحديد", "Al-Mujadila المجادلة", "Al-Hashr الحشر", "Al-Mumtahina الممتحنة", "As-Saff الصف", "Al-Jumua الجمعة", "Al-Munafiqun المنافقون", 
    "At-Taghabun التغابن", "At-Talaq الطلاق", "At-Tahrim التحريم", "Al-Mulk الملك", "Al-Qalam القلم", "Al-Haaqqa الحاقة", "Al-Ma'arij المعارج", "Nuh نوح", "Al-Jinn الجن", "Al-Muzzammil المزمل", 
    "Al-Muddathir المدثر", "Al-Qiyama القيامة", "Al-Insan الإنسان", "Al-Mursalat المرسلات", "An-Naba النبأ", "An-Nazi'at النازعات", "Abasa عبس", "At-Takwir التكوير", "Al-Infitar الإنفطار", "Al-Mutaffifin المطففين", 
    "Al-Inshiqaq الإنشقاق", "Al-Burooj البروج", "At-Tariq الطارق", "Al-Ala الأعلى", "Al-Ghashiya الغاشية", "Al-Fajr الفجر", "Al-Balad البلد", "Ash-Shams الشمس", "Al-Lail الليل", "Ad-Duhaa الضحى", 
    "Ash-Sharh الشرح", "At-Tin التين", "Al-Alaq العلق", "Al-Qadr القدر", "Al-Bayyina البينة", "Az-Zalzala الزلزلة", "Al-Adiyat العاديات", "Al-Qaria القارعة", "At-Takathur التكاثر", "Al-Asr العصر", 
    "Al-Humaza الهمزة", "Al-Fil الفيل", "Quraish قريش", "Al-Ma'un الماعون", "Al-Kawthar الكوثر", "Al-Kafiroon الكافرون", "An-Nasr النصر", "Al-Masad المسد", "Al-Ikhlas الإخلاص", "Al-Falaq الفلق", "An-Nas الناس"
]

let surahName = document.querySelector("#surahName")
let plaay = document.querySelector("#fullaudio")
let video = document.createElement("audio");
                let linka = document.createElement("source");
                linka.src = `https://www.youtube.com/zvbmJ-veNdg`;
                video.append(linka);
                fullaudio.append(video);
                video.play();




inputElement.onkeyup = async event => {
    if(event.keyCode == 13){
        if(inputElement.value > 114 || inputElement.value < 0){
            return alert("Xato")
        }
        surahName.textContent = `${suralar[inputElement.value]}`
        let dataUz = await fetch(`https://quranenc.com/api/v1/translation/sura/uzbek_rwwad/${inputElement.value}`);
        dataUz = await dataUz.json()
        list.textContent = ""

        for(let el of dataUz.result){
            // console.log(el);
            audioWrapper.innerHTML= null

            let li = document.createElement("li")
            let h1 = document.createElement("h1")
            let h2 = document.createElement("h2")




            h1.textContent = el.arabic_text
            h2.textContent = el.translation
            li.append(h1, h2)
            list.append(li)


            li.onclick = () => {
                // Eski audio mavjud bo'lsa, uni to'xtatish
                let oldAudio = audioWrapper.querySelector("audio");
                if (oldAudio) {
                    oldAudio.pause();
                    oldAudio.currentTime = 0;
                }
            
                let audio = document.createElement("audio");
                let source = document.createElement("source");
                source.src = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${el.id}.mp3`;
                audio.append(source);
                audioWrapper.append(audio);
                audio.play();
                

                
                let actives = document.querySelectorAll(".active");
                actives.forEach(el => el.classList.remove("active"));
                li.classList.add("active");
            };
            
        }
    }
}
