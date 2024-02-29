package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cars;
@Service
public class ServiceforAuction {

	@Autowired
    private CrudRepository<Cars,Integer> repo;
  // Auction
    
    public Cars Addcar(Cars cr)
    {
 			   return (Cars) repo.save(cr);
 			   
    }
    public  List<Cars> ShowCars()
    {
 			   return (List<Cars>) repo.findAll();
    }
    public Cars Findcar(int id)
    {
 	   return (Cars) repo.findById(id).orElse(null);
    }
    public String dltCar(int id)
    {
 	   repo.deleteById(id);
 	   if(repo.findById(id)!=null)
 	   return "Car Gets Deleted";
 	   else
 		  return "No such Car Exist";
    }
   public String updtCar(int id,String Carname , String Capacity)
   {
	   Cars curr=repo.findById(id).orElse(null);
	   if(curr!=null)
	   {
		     curr.setCarname(Carname);
		     curr.setEngineCapacity(Capacity);
		       repo.save(curr);
		   return " Entry Updated ";
	   }
	   else
		   return "No such Car Exist";
   }
   
}
