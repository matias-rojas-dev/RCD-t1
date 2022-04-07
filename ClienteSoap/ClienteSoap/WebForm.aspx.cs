using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ClienteSoap
{
    public partial class WebForm : System.Web.UI.Page
    {
        WebService.WSValidarClient ws = new WebService.WSValidarClient();

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
            String nombre = TextBox3.Text.ToString();
            String a = ws.ValidacionNombre(nombre);
            Label1.Text = "Resultado: " + a;
        }
    }
}