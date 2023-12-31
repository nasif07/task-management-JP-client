const Container = ({children}) => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 mb-16">
            {children}
        </div>
    );
};

export default Container;