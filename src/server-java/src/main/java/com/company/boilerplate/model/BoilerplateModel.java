package com.company.boilerplate.model;

public class BoilerplateModel {
    private String name;
    private Integer id;
    private String type;

    public BoilerplateModel(String name, Integer id, String type){
        super();
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type = type;
    }
}
