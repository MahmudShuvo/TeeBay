const OwnerCard = ({owner}: { owner: any }) => {
    return (
        <div className="bg-gray-200 border shadow m-2 rounded">
            <p>Bought by : {owner?.email}</p>
        </div>
    );
};


export default OwnerCard;