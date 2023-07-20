package com.CRUDSpring.Template.Controller;

import com.CRUDSpring.Template.Models.Usuario;
import com.CRUDSpring.Template.dao.UsuarioDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String iniciarSesion(@RequestBody Usuario usuario) {
        if(usuarioDao.verificar(usuario)){
            return "OK";
        }
        return "Error";
    }
}
