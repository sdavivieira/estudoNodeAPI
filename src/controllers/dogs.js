const CachorroService = require('../services/dogs')

const service = new CachorroService();

class DogsController {
  
  GetAll(req, res){
    try{
      const dogs = service.GetAll();
      res.status(200).json({dogs});
    } catch(err){
      res.status(500).json({err})
    }
  }
  GetById(req, res){
    try{
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "ID é obrigatório" });
      }
      const dog = service.GetById(id)
      res.status(200).json({dog});
    } catch(err){
      res.status(500).json({èrr})
    }
  }

  Update(req, res){
    try{
      const dog = req.body.dog;
      if (!dog) {
        return res.status(400).json({ error: "Dados são obrigatórios" });
      }
       const newDog = service.Update(dog);
       res.status(200).json({newDog})
    } catch(err){
      res.status(500).json({err})

    }
  }

  UpdateById(req, res){
    try{
        const id = req.params.id;
        const dog = req.body.dog;
        if(!id){
          return res.status(400).json({ error: "Dados são obrigatórios" });
        }
        const alterDog = service.UpdateById(id, dog);
        const dogs = service.GetAll();
        res.status(200).json({ dogs });
     } 
      catch (err) {
        res.status(500).json({ error: error.message });
    }
  }

  Delete(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "ID é obrigatório" });
      }
      console.log(id)
      const success  = service.Delete(id);
      if (!success ) {
        return res.status(404).json({ error: "Cachorro não encontrado" });
      }
  
      const dogs = service.GetAll();
      res.status(200).json({ dogs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
}

module.exports = DogsController;