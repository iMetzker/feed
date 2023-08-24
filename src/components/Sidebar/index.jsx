import { Aside, Profile, Button, Avatar, Name, Office } from "./style";
import { PencilSimpleLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <>
        <Aside> 
              <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                  alt="imagem de capa"
              />
              <Profile>
                  <Avatar>
                    <img
                        src="https://avatars.githubusercontent.com/u/113571205?v=4"
                        alt="avatar"
                    />
                  </Avatar>

                  <Name>Ivny Metzker</Name>
                  <Office>Student Developer</Office>
              </Profile>

              <Button>
                  <a href="#">
                      <PencilSimpleLine size={20} />
                      Editar seu perfil
                  </a>
              </Button>
        </Aside>
    </>
  );
}
