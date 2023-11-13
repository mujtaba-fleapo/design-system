/// <reference types="react" />
import '../../styles/style.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface PostSliderProps {
    id: string;
    assets: {
        id: string;
        url: string;
        isFree: boolean;
        resizedUrl: string;
        type: string;
    }[];
    onUnlockMedia?: () => unknown;
    isExclusive?: boolean;
    onSubscribeCreator?: () => unknown;
    initialSlide?: number;
}
export declare const PostSlider: React.FC<PostSliderProps>;
export {};
//# sourceMappingURL=PostSlider.d.ts.map