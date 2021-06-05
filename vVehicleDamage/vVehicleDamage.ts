export class vVehicleDamage
{
    public OnEntityStreamIn = (entity: EntityMp) => 
    {
        if(entity.isAVehicle())
        {
            let car = entity as VehicleMp;
            car.setDisablePetrolTankDamage(true);
            car.setDisablePetrolTankFires(true);
        }
    }

    public OnUpdate = (nametags: any) =>
    {
        for(let veh of mp.vehicles.streamed)
        {
            if(veh == undefined)
                continue;
            
            try
            {
                if(veh.getEngineHealth() < 0 || veh.getHealth() <= 250)
                {
                    veh.setEngineHealth(0);
                    veh.setEngineOn(false, true, false);
                }
                else if(veh.getEngineHealth() < 1000 && veh.getHealth() > 250)
                {
                    veh.setEngineHealth(1000);
                }
            }
            catch { }
        }
    }

    public constructor()
    {
        mp.events.add('entityStreamIn', this.OnEntityStreamIn);
        mp.events.add('render', this.OnUpdate);
    }
}

const PetrolDamage = new vVehicleDamage();