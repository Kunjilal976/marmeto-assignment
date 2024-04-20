fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
.then(response => response.json())
.then(data => {
    // const images = data.product.images;
    const colors = data.product.options[0].values;
    const sizes = data.product.options[1].values;
    const container = document.querySelector('.child2');
    const rightbox = document.querySelector('.rightbox');
    


    const images=[
        {
            "src":"f34ce14e7187edeeb026d73413e4a29c.jpeg",
        },
        {
            "src":"f34ce14e7187edeeb026d73413e4a29c.jpeg",
        },
        {
            "src":"f34ce14e7187edeeb026d73413e4a29c.jpeg",
        },
        {
            "src":"f34ce14e7187edeeb026d73413e4a29c.jpeg"
        }
    ]


  images.forEach((image, index) => {
        const div = document.createElement('div');
        div.classList.add('small-child');
        div.style.backgroundImage = `url('${image.src}')`;
        container.appendChild(div);
    });


    colors.forEach(color => {
        const container = document.createElement('div');
        container.classList.add('color-container');
        
        const div = document.createElement('div');
        div.classList.add('color-box');
        const colorValue = Object.values(color)[0];
        div.style.backgroundColor = colorValue;
        div.addEventListener('click', () => toggleFrame(container, colorValue));
        
        container.appendChild(div);
        rightbox.querySelector('.colors').appendChild(container);
    });
    
    function toggleFrame(selectedContainer, colorValue) {
        const colorContainers = document.querySelectorAll('.color-container');
        colorContainers.forEach(container => {
            if (container !== selectedContainer) {
                container.classList.remove('active');
            }
        });
        
        selectedContainer.style.borderColor = colorValue;
        selectedContainer.classList.add('active');
    }
    
    
    
    sizes.forEach(size => {
        const sizeBox = document.createElement('div');
        sizeBox.classList.add('size-box');
    
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'size'; // Use the same name for all radio buttons to create a group
        radio.value = size;
    
        const label = document.createElement('label');
        label.textContent = size;
    
        sizeBox.appendChild(radio);
        sizeBox.appendChild(label);
    
        rightbox.querySelector('.sizes').appendChild(sizeBox);
    });
    


    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const quantityElement = document.querySelector('.quantity-value');
    
    decrementButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    });
    
});


