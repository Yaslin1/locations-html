const embeds ={
   '123' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53933860123!2d-80.29967017384367!3d25.782390651107434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1676087564194!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    '124' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114018.46213917994!2d-80.19925160492986!3d26.741920662798893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb595adc1%3A0x15efc7b51fe16bde!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1676087165972!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    '125' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60090676474!2d-96.87197983511861!3d32.82058616552477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1676087685604!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    '126' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.1957176044!2d-95.68216387742953!3d29.81688095121193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1676087424815!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
}

const changeIframe =(key) => {
    document.getElementById("iframe-container").innerHTML = embeds[key]
}

const dropdownSelect = () => {
    key = document.getElementById("store-dropdown") .value
    document.getElementById("iframe-container") .innerHTML = embeds [key]
}
