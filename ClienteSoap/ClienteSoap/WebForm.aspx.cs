using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;

namespace ClienteSoap
{
    public partial class WebForm : System.Web.UI.Page
    {
        wsServicioCliente.WSValidarClient ws = new wsServicioCliente.WSValidarClient();
        //WebService.WSValidarClient ws = new WebService.WSValidarClient();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            String rut = TextBox1.Text.ToString();
            String dv = TextBox2.Text.ToString();
            if ((ws.ValidacionRut(rut, dv).ToString()).Equals("True"))
            {
                Label1.Text = "El digito validador ingresado es correcto";
            } else
            {
                Label1.Text = "Oops! El digito verificador no corresponde";
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            String nombreCompleto = TextBox3.Text.ToString();
            String estructura;
            int ok = 0;
            String nombres = "Nombres: ", apellidos="Apellidos: ";
            for (int i=0; i<ws.ValidacionNombre(nombreCompleto).Length; i++)
            {
                if (ok == 0 && ws.ValidacionNombre(nombreCompleto)[i] != "/")
                {
                    nombres += ws.ValidacionNombre(nombreCompleto)[i];
                    nombres += " ";
                }
                if (ws.ValidacionNombre(nombreCompleto)[i] == "/")
                {
                    ok = 1;
                    i++;
                }
                if (ok == 1)
                {
                    apellidos += ws.ValidacionNombre(nombreCompleto)[i];
                    apellidos += " ";
                }
            }
            Label1.Text = nombres + " </br> " + apellidos;
                
        }
    }
}