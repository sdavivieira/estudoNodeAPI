const DogsRepository = require('../repository/dogs')

const repo = new DogsRepository(); 
class CachorroService{
  GetAll(){
    return repo.GetAll();
  }
  GetById(id){
    return repo.GetById(id);
  }
  Update(dog){
    return repo.Update(dog)
  }
  UpdateById(id, dog){
    return repo.UpdateById(id, dog)
  }
  Delete(id) {
    const success = repo.Delete(id);
    return success;
  }
  
}

module.exports = CachorroService;