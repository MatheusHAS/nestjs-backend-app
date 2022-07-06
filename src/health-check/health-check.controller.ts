import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
    @Get()
    health() {
        return {
            message: "I'm Alive"
        }
    }
}
