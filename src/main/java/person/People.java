/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package person;

import java.util.ArrayList;

/**
 *
 * @author Guna
 */
public class People {
    
    private ArrayList<Person> people = new ArrayList();


    public ArrayList<Person> getListOfPeople() {
        return people;
    }
    
    public Person getPerson(int index) {
        return people.get(index);
    }

    public void addPerson(Person p) {
        people.add(p);
    }
    
    public int getSize() {
        return people.size();
    }
    
    public boolean isEmpty() {
        return people.isEmpty();
    }
    
}
