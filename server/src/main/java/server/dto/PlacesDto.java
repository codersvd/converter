package server.dto;

import javax.persistence.*;

@Entity
@Table(name = "places")
public class PlacesDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private byte status;

    @Column(name = "user")
    private int user;

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

    @Override
    public String toString() {
        return "Place: " + this.id + ", " + this.name + ", " + this.status;
    }

}
