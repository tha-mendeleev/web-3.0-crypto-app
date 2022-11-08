const Loader = () => {
    return (
        <div className="relative flex justify-center items-center py-4">
            <div className="w-20 h-20 rounded-full border-t-[1px] border-green-300 animate-spin"></div>
            <div className="absolute top-50 left-50 -translate-x-50 -translate-y-50 text-white animate-pulse">Loading</div>
        </div>
    );
}

export default Loader;