import { images } from './images';

const getImageByKey = (key: string) => {
    return images[key as keyof typeof images];
};

export { getImageByKey };
