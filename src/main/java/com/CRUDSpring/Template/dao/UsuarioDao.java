package com.CRUDSpring.Template.dao;

import com.CRUDSpring.Template.Models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void deleteUsuario(Long id);

    void registrarUsuarios(Usuario usuario);

    boolean verificar(Usuario usuario);

}
