
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const FilterSidebar = () => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-4 space-y-6">
        <div>
          <h3 className="font-bold mb-3">Ethical Score</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Minimum Score</span>
                <span>70</span>
              </div>
              <Slider defaultValue={[70]} max={100} step={1} />
            </div>
          </div>
        </div>

        <Separator />
        
        <div>
          <h3 className="font-bold mb-3">Dataset Type</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="text" />
              <Label htmlFor="text">Text Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="image" defaultChecked />
              <Label htmlFor="image">Image Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audio" />
              <Label htmlFor="audio">Audio Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="tabular" defaultChecked />
              <Label htmlFor="tabular">Tabular Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mixed" />
              <Label htmlFor="mixed">Mixed Media</Label>
            </div>
          </div>
        </div>

        <Separator />
        
        <div>
          <h3 className="font-bold mb-3">License Type</h3>
          <RadioGroup defaultValue="commercial">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Licenses</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="commercial" id="commercial" />
              <Label htmlFor="commercial">Commercial Use</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noncommercial" id="noncommercial" />
              <Label htmlFor="noncommercial">Non-Commercial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="research" id="research" />
              <Label htmlFor="research">Research Only</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />
        
        <div>
          <h3 className="font-bold mb-3">Verification Status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" defaultChecked />
              <Label htmlFor="verified">DAO Verified</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audited" defaultChecked />
              <Label htmlFor="audited">Audited</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="unverified" />
              <Label htmlFor="unverified">Unverified</Label>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button className="w-full bg-ethos-blue">Apply Filters</Button>
          <Button variant="outline" className="w-full mt-2">Reset</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
