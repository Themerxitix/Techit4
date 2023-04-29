const uitverkocht = inventory.map((uitverkochteTvs)=>{
    if (uitverkochteTvs.sold === uitverkochteTvs.originalStock){
        return uitverkochteTvs;
    }
});

//console.log(uitverkocht);