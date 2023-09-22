function Item(){
    return(
        <div className="Item row">
            <div className="col-10">Hoc ReactJS</div>
            <div className="col-1">
                <button className="btn btn-outline-danger">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
            <div className="col-1">
                <button className="btn btn-outline-info">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
        </div>
    );
}