const scripts = [
    "vVehicleDamage/vVehicleDamage",
];

scripts.forEach((file) =>
{
    try
    {
        require(file);
    }
    catch(e)
    {
        mp.gui.chat.push('Failed to load Script "${file}".')
    }
});
