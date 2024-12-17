const dogs = ['Vira-Lata', 'Pitbull', 'Pinsher'];


class DogsRepository{
  GetAll(){
    return dogs;
  }
  GetById(id){
    return dogs[id]
  }
  Update(dog){
    return dogs.push(dog);
  }
  UpdateById(id, dog){
    dogs[id] = dog;
  }
  Delete(id) {
    if (id >= 0 && id < dogs.length) {
      dogs.splice(id, 1);
      return true; 
    }
    return false;
  }
  
}


module.exports = DogsRepository;