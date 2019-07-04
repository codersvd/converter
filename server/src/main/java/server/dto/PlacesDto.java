package server.dto;

import javax.persistence.*;

@Entity
@Table(name = "places")
public class PlacesDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private byte status;

    @Column(name = "userid")
    private int userid;

    @Column(name = "alias")
    private String alias;

    public PlacesDto() {
    }

    public PlacesDto(String name, Byte status) {
        this.name = name;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public int getUserid() {
        return userid;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getAlias() {
        return alias;
    }

    @Override
    public String toString() {
        return "Place: " + this.id + ", " + this.name + ", " + this.status+","+this.userid;
    }

}
