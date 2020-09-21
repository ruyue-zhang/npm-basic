import romanizer from 'romanize';

const transform = (number) => {
    return romanizer(number);
};

export {
    transform
};