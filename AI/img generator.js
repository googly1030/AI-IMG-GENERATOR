const API_KEY = '[YOUR API KEY HERE]';
const submiticon = document.querySelector('#submit-icon');
const inputElement= document.querySelector('input');
const imageSection = document.querySelector('.image-section');

const getImages = async () => { 
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'prompt': inputElement.value,
            'n':2,
            'size':"1024x1024"
        })
    }
    try 
    {
       const response = await fetch('https://api.openai.com/v1/images/generations', options)
         const data = await response.json()
       
            data?.data.forEach((imageObject) => 
            {
                const ImageContainer = document.createElement('div')
                ImageContainer.classList.add('image-container')
                const imageElement = document.createElement('img')
                imageElement.setAttribute('src', imageObject.url)
                ImageContainer.append(imageElement)
                imageSection.append(ImageContainer)
            })
    }
    catch (error)
    {
        console.log(error)
    }
}
submiticon.addEventListener('click', getImages)
