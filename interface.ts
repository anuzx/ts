//whenever we are using implements in classes make it using interface and not types

interface cupSize {
    size: "small" | "medium" | "large"
}

//if we would have made types instead of interface then we would have got error in class syntax
class bra implements cupSize {
  size: "small" | "medium" | "large" = "large"
}

//union and intersection

//union 

type colorType = "blue" | "green" | "red" //literal types

function color(t:colorType) {
    console.log(t)
}

//intersection
type BaseChai = {
    tealeaves : number
}
type extra = {
  masala: number;
};
type masalaChai = BaseChai & extra // now it will have both properties and both are imp otherwise ts will give error

const cup: masalaChai = {
    tealeaves: 2,
    masala:1
}
//if i would have left any property in chai then that would have given me error

//readonly : we can set the value once , next time it will give error 

type config = {
    readonly appName: string
    version:number
}

const cfg: config = {
    appName: "syncBoard",
    version: 1
}

//now cfg.appName = "anyOtherApp" will give error 