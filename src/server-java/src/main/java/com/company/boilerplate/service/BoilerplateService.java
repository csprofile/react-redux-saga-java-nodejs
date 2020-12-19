package com.company.boilerplate.service;
import com.company.boilerplate.model.BoilerplateModel;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BoilerplateService {
    private static final List<BoilerplateModel> boilerplateList = new ArrayList<>(Arrays.asList(
        new BoilerplateModel("John", 1, "Java"),
        new BoilerplateModel("Mary", 2, "Java"),
        new BoilerplateModel("Mark", 3, "Java")
    ));

    public static List<BoilerplateModel> GetBoilerplates(){
        return boilerplateList;
    }

    public static BoilerplateModel GetBoilerplate(Integer id){
        for (BoilerplateModel boilerplate: boilerplateList) {
            if (boilerplate.getId() == id) {
                return boilerplate;
            }
        }

        return null;
    }

}
