package com.doyouevenjavabro.carwell.services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/servicemaster")
public class ServiceMasterController {

	// GET all
	@RequestMapping(method = RequestMethod.GET, value = { "", "/" })
	public String[][] allMilestones() {

		return ServiceMaster.allMilestones;
	}

	// GET 7500
	@RequestMapping(method = RequestMethod.GET, value = { "7500", "7500/" })
	public String[] get7500() {

		return ServiceMaster.milestone7hk;
	}

	// GET 15000
	@RequestMapping(method = RequestMethod.GET, value = { "15000", "15000/" })
	public String[] get15000() {

		return ServiceMaster.milestone15k;
	}

	// GET 22500
	@RequestMapping(method = RequestMethod.GET, value = { "22500", "22500/" })
	public String[] get22500() {

		return ServiceMaster.milestone22hk;
	}

	// GET 30000
	@RequestMapping(method = RequestMethod.GET, value = { "30000", "30000/" })
	public String[] get30000() {

		return ServiceMaster.milestone30k;
	}

	// GET 37500
	@RequestMapping(method = RequestMethod.GET, value = { "37500", "37500/" })
	public String[] get37500() {

		return ServiceMaster.milestone37hk;
	}

	// GET 45000
	@RequestMapping(method = RequestMethod.GET, value = { "45000", "45000/" })
	public String[] get45000() {

		return ServiceMaster.milestone45k;
	}

	// GET 52500
	@RequestMapping(method = RequestMethod.GET, value = { "52500", "52500/" })
	public String[] get52500() {

		return ServiceMaster.milestone52hk;
	}

	// GET 60000
	@RequestMapping(method = RequestMethod.GET, value = { "60000", "60000/" })
	public String[] get60000() {

		return ServiceMaster.milestone60k;
	}

	// GET 67500
	@RequestMapping(method = RequestMethod.GET, value = { "67500", "67500/" })
	public String[] get67500() {

		return ServiceMaster.milestone67hk;
	}

	// GET 75000
	@RequestMapping(method = RequestMethod.GET, value = { "75000", "75000/" })
	public String[] get75000() {

		return ServiceMaster.milestone75k;
	}

	// GET 82500
	@RequestMapping(method = RequestMethod.GET, value = { "82500", "82500/" })
	public String[] get82500() {

		return ServiceMaster.milestone82hk;
	}

	// GET 90000
	@RequestMapping(method = RequestMethod.GET, value = { "90000", "90000/" })
	public String[] get90000() {

		return ServiceMaster.milestone90k;
	}

	// GET 97500
	@RequestMapping(method = RequestMethod.GET, value = { "97500", "97500/" })
	public String[] get97500() {

		return ServiceMaster.milestone97hk;
	}

	// GET 105000
	@RequestMapping(method = RequestMethod.GET, value = { "105000", "105000/" })
	public String[] get105000() {

		return ServiceMaster.milestone105k;
	}

	// GET 112500
	@RequestMapping(method = RequestMethod.GET, value = { "112500", "112500/" })
	public String[] get112500() {

		return ServiceMaster.milestone112hk;
	}

	// GET 120000
	@RequestMapping(method = RequestMethod.GET, value = { "120000", "120000/" })
	public String[] get120000() {

		return ServiceMaster.milestone120k;
	}

	// GET 127500
	@RequestMapping(method = RequestMethod.GET, value = { "127500", "127500/" })
	public String[] get127500() {

		return ServiceMaster.milestone127hk;
	}

	// GET 135000
	@RequestMapping(method = RequestMethod.GET, value = { "135000", "135000/" })
	public String[] get135000() {

		return ServiceMaster.milestone135k;
	}

	// GET 142500
	@RequestMapping(method = RequestMethod.GET, value = { "142500", "142500/" })
	public String[] get142500() {

		return ServiceMaster.milestone142hk;
	}

	// GET 150000
	@RequestMapping(method = RequestMethod.GET, value = { "150000", "150000/" })
	public String[] get150000() {

		return ServiceMaster.milestone150k;
	}

	// GET Above 150000 miles
	@RequestMapping(method = RequestMethod.GET, value = { "final", "final/" })
	public String[] getFinal() {

		return ServiceMaster.milestoneAbove150k;
	}

}
