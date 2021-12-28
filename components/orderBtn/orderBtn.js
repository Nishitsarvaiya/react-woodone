import Image from 'next/image';
import Link from 'next/link';
import PlusIcon from '../../assets/images/icon-plus.svg';

const OrderBtn = () => {
    return (
        <div className='order-btn' data-cursor-target data-cursor-stick>
            <div className='btn'>
                <Link href='/order'>
                    <a>
                        <Image src={PlusIcon} alt='' />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default OrderBtn;
