const router = require('express').Router();

const Proyectos = require('../models/Proyectos');


router.route('/')
.get((req, res, next) => {
  Proyectos.find({}, (err, proyectos) => {
    res.json({
      success: true,
      message: "Success",
      proyectos: proyectos
    })
  })
})
.post((req, res, next) => {
  
  let proyecto = new Proyectos();
  proyecto.name = req.body.name;
  proyecto.technologies = req.body.technologies;
  proyecto.description = req.body.description;
  proyecto.link = req.body.link;
  proyecto.github = req.body.github;
    proyecto.save();
  res.json({
    success: true,
    message: "Guardado!"
  });

});

 module.exports = router;
