import './Loader.scss';

export const Loader = ({ message = 'Loading...' }: { message?: string }) => {
    return (
        <div className="loader-container">
            <div className="spinner" />
            <p>{message}</p>
        </div>
    );
};
