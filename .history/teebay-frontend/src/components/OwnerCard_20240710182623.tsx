const OwnerCard = ({owner}: { owner: any }) => {
    return (
        <div className="bg-gray-200 border shadow mt-2 rounded">
            <p><span className="bg-slate-200">{owner?.email}</span></p>
        </div>
    );
};


export default OwnerCard;