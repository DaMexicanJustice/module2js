/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package person;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Guna
 */
@WebServlet(name = "PersonServlet", urlPatterns = {"/person"})
public class PersonServlet extends HttpServlet {

    private int index = 0;
    private static ArrayList<Person> people = new People().getListOfPeople();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {

            if (people.isEmpty()) {
                Person p1 = new Person("Fiora", "Xenoblade", 20);
                Person p2 = new Person("Shulk", "Xenoblade", 22);
                Person p3 = new Person("Dunban", "Xenoblade", 30);
                Person p4 = new Person("Reyn", "Xenoblade", 23);
                Person p5 = new Person("Sharla", "Xenoblade", 28);
                Person p6 = new Person("Riki", "Xenoblade", 40);
                Person p7 = new Person("Melia", "Xenoblade", 18);
                Person p8 = new Person("Dixon", "Xenoblade", 50);
                Person p9 = new Person("Lorethia", "Xenoblade", 36);

                people.add(p1);
                people.add(p2);
                people.add(p3);
                people.add(p4);
                people.add(p5);
                people.add(p6);
                people.add(p7);
                people.add(p8);
                people.add(p9);
            }

            if (request.getMethod().equals("POST")) {
                BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
                String json = "";

                StringBuilder everything = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    everything.append(line);
                }

                json = everything.toString();
                System.out.println("JSON: " + json);
                
                Person person = new Gson().fromJson(json, Person.class);
                System.out.println("Object: " + person + "Firstname: " + person.getFirstName() + " Lastname: " + person.getLastName() + " Age: " + person.getAge());
                people.add(person);
                
            }

            if (request.getMethod().equals("GET")) {

                if (index < people.size()) {
                    out.print(new Gson().toJson(people.get(index)));
                    index++;
                } else {
                    out.print(new Gson().toJson(new Person("NaN", "NaN", -1)));
                }
            }
            
            System.out.println(people.size());

        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
