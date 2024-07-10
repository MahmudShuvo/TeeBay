const OwnerCard = ({owner}: { owner: any }) => {
    return (
        <div className="bg-gray-200 border shadow m-2 rounded">
            <p>Bought by : <span className="bg-">{owner?.email}</span></p>
        </div>
    );
};


export default OwnerCard;