const CustomLink = ({ children, ...restProps }) => {
    return (
        <div className='link' {...restProps} data-cursor-target data-cursor-stick>
            <div className='clipper'>
                <a href='#'>
                    <span>{children}</span>
                </a>
            </div>
        </div>
    );
};

export default CustomLink;
