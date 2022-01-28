class Apifeature{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;

    }

    pagination(resultPerPage){
        const curruntpage=Number(this.queryStr.page )||1;
        const Skip = resultPerPage*(curruntpage-1)
        this.query=this.query.limit(resultPerPage).skip(Skip);
        return this;

    }
}
module.exports=Apifeature