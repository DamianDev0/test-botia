// import {
//   Controller,
//   Get,
//   Headers,
//   Post,
//   Body,
//   Query,
//   Put,
// } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';

// import { ATRIBUTOSService } from './metrofrenos.service';
// import {
//   CreateATRIBUTOSDto,
//   FilterkardexDto,
//   UpdateATRIBUTOSDto,
// } from './dto/metrofrenos.dto';

// import { CITASService } from './metrofrenos.service';
// import { CreateCITASDto, UpdateCITASDto } from './dto/metrofrenos.dto';

// import { CLAVESService } from './metrofrenos.service';
// import { CreateCLAVESDto, UpdateCLAVESDto } from './dto/metrofrenos.dto';

// import { COLECCIONESService } from './metrofrenos.service';
// import {
//   CreateCOLECCIONESDto,
//   UpdateCOLECCIONESDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGService } from './metrofrenos.service';
// import { CreateCONFIGDto, UpdateCONFIGDto } from './dto/metrofrenos.dto';

// import { CONFIGAUTOGESTIONService } from './metrofrenos.service';
// import {
//   CreateCONFIGAUTOGESTIONDto,
//   UpdateCONFIGAUTOGESTIONDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGBDService } from './metrofrenos.service';
// import { CreateCONFIGBDDto, UpdateCONFIGBDDto } from './dto/metrofrenos.dto';

// import { CONFIGCABEZAService } from './metrofrenos.service';
// import {
//   CreateCONFIGCABEZADto,
//   UpdateCONFIGCABEZADto,
// } from './dto/metrofrenos.dto';

// import { CONFIGCAPTURAService } from './metrofrenos.service';
// import {
//   CreateCONFIGCAPTURADto,
//   UpdateCONFIGCAPTURADto,
// } from './dto/metrofrenos.dto';

// import { CONFIGCAPTURADETService } from './metrofrenos.service';
// import {
//   CreateCONFIGCAPTURADETDto,
//   UpdateCONFIGCAPTURADETDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGCOTIZAService } from './metrofrenos.service';
// import {
//   CreateCONFIGCOTIZADto,
//   UpdateCONFIGCOTIZADto,
// } from './dto/metrofrenos.dto';

// import { CONFIGDETALLEService } from './metrofrenos.service';
// import {
//   CreateCONFIGDETALLEDto,
//   UpdateCONFIGDETALLEDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGDOCUMENTOService } from './metrofrenos.service';
// import {
//   CreateCONFIGDOCUMENTODto,
//   UpdateCONFIGDOCUMENTODto,
// } from './dto/metrofrenos.dto';

// import { CONFIGFORMULARIOService } from './metrofrenos.service';
// import {
//   CreateCONFIGFORMULARIODto,
//   UpdateCONFIGFORMULARIODto,
// } from './dto/metrofrenos.dto';

// import { CONFIGKARDEXService } from './metrofrenos.service';
// import {
//   CreateCONFIGKARDEXDto,
//   UpdateCONFIGKARDEXDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGQRService } from './metrofrenos.service';
// import { CreateCONFIGQRDto, UpdateCONFIGQRDto } from './dto/metrofrenos.dto';

// import { CONFIGQRDETService } from './metrofrenos.service';
// import {
//   CreateCONFIGQRDETDto,
//   UpdateCONFIGQRDETDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGRELService } from './metrofrenos.service';
// import { CreateCONFIGRELDto, UpdateCONFIGRELDto } from './dto/metrofrenos.dto';

// import { CONFIGTABLEService } from './metrofrenos.service';
// import {
//   CreateCONFIGTABLEDto,
//   UpdateCONFIGTABLEDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGTARGETAService } from './metrofrenos.service';
// import {
//   CreateCONFIGTARGETADto,
//   UpdateCONFIGTARGETADto,
// } from './dto/metrofrenos.dto';

// import { CONFIGUBICACIONService } from './metrofrenos.service';
// import {
//   CreateCONFIGUBICACIONDto,
//   UpdateCONFIGUBICACIONDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGVISTAService } from './metrofrenos.service';
// import {
//   CreateCONFIGVISTADto,
//   UpdateCONFIGVISTADto,
// } from './dto/metrofrenos.dto';

// import { CONFIGVISTATService } from './metrofrenos.service';
// import {
//   CreateCONFIGVISTATDto,
//   UpdateCONFIGVISTATDto,
// } from './dto/metrofrenos.dto';

// import { CONFIGZONASService } from './metrofrenos.service';
// import {
//   CreateCONFIGZONASDto,
//   UpdateCONFIGZONASDto,
// } from './dto/metrofrenos.dto';

// import { CONFIG_CITASService } from './metrofrenos.service';
// import {
//   CreateCONFIG_CITASDto,
//   UpdateCONFIG_CITASDto,
// } from './dto/metrofrenos.dto';

// import { CONFIG_ENCUESTAService } from './metrofrenos.service';
// import {
//   CreateCONFIG_ENCUESTADto,
//   UpdateCONFIG_ENCUESTADto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOSService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOSDto,
//   UpdateCONTENIDOSDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_CAPService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_CAPDto,
//   UpdateCONTENIDOS_CAPDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_DETService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_DETDto,
//   UpdateCONTENIDOS_DETDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_PROService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_PRODto,
//   UpdateCONTENIDOS_PRODto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_RECService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_RECDto,
//   UpdateCONTENIDOS_RECDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_SUBService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_SUBDto,
//   UpdateCONTENIDOS_SUBDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_TSKService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_TSKDto,
//   UpdateCONTENIDOS_TSKDto,
// } from './dto/metrofrenos.dto';

// import { CONTENIDOS_USRService } from './metrofrenos.service';
// import {
//   CreateCONTENIDOS_USRDto,
//   UpdateCONTENIDOS_USRDto,
// } from './dto/metrofrenos.dto';

// import { CUESTIONARIOSService } from './metrofrenos.service';
// import {
//   CreateCUESTIONARIOSDto,
//   UpdateCUESTIONARIOSDto,
// } from './dto/metrofrenos.dto';

// import { CUESTIONARIOS_PService } from './metrofrenos.service';
// import {
//   CreateCUESTIONARIOS_PDto,
//   UpdateCUESTIONARIOS_PDto,
// } from './dto/metrofrenos.dto';

// import { CUESTIONARIOS_RService } from './metrofrenos.service';
// import {
//   CreateCUESTIONARIOS_RDto,
//   UpdateCUESTIONARIOS_RDto,
// } from './dto/metrofrenos.dto';

// import { DEP_EQUIPOSService } from './metrofrenos.service';
// import {
//   CreateDEP_EQUIPOSDto,
//   UpdateDEP_EQUIPOSDto,
// } from './dto/metrofrenos.dto';

// import { DETALLE_CELDASService } from './metrofrenos.service';
// import {
//   CreateDETALLE_CELDASDto,
//   UpdateDETALLE_CELDASDto,
// } from './dto/metrofrenos.dto';

// import { DTN_TIEMPOService } from './metrofrenos.service';
// import {
//   CreateDTN_TIEMPODto,
//   UpdateDTN_TIEMPODto,
// } from './dto/metrofrenos.dto';

// import { ENCUESTAService } from './metrofrenos.service';
// import { CreateENCUESTADto, UpdateENCUESTADto } from './dto/metrofrenos.dto';

// import { MERCADOService } from './metrofrenos.service';
// import { CreateMERCADODto, UpdateMERCADODto } from './dto/metrofrenos.dto';

// import { MERCADO_DETService } from './metrofrenos.service';
// import {
//   CreateMERCADO_DETDto,
//   UpdateMERCADO_DETDto,
// } from './dto/metrofrenos.dto';

// import { NICHOSService } from './metrofrenos.service';
// import { CreateNICHOSDto, UpdateNICHOSDto } from './dto/metrofrenos.dto';

// import { OREPARACION1_2000Service } from './metrofrenos.service';
// import {
//   CreateOREPARACION1_2000Dto,
//   UpdateOREPARACION1_2000Dto,
// } from './dto/metrofrenos.dto';

// import { OREPARACION2_2000Service } from './metrofrenos.service';
// import {
//   CreateOREPARACION2_2000Dto,
//   UpdateOREPARACION2_2000Dto,
// } from './dto/metrofrenos.dto';

// import { PREGUNTASService } from './metrofrenos.service';
// import { CreatePREGUNTASDto, UpdatePREGUNTASDto } from './dto/metrofrenos.dto';

// import { PRESUPUESTOSService } from './metrofrenos.service';
// import {
//   CreatePRESUPUESTOSDto,
//   UpdatePRESUPUESTOSDto,
// } from './dto/metrofrenos.dto';

// import { SYS_APPSService } from './metrofrenos.service';
// import { CreateSYS_APPSDto, UpdateSYS_APPSDto } from './dto/metrofrenos.dto';

// import { SYS_ROLESService } from './metrofrenos.service';
// import { CreateSYS_ROLESDto, UpdateSYS_ROLESDto } from './dto/metrofrenos.dto';

// import { SYS_ROL_CAMPOService } from './metrofrenos.service';
// import {
//   CreateSYS_ROL_CAMPODto,
//   UpdateSYS_ROL_CAMPODto,
// } from './dto/metrofrenos.dto';

// import { SYS_SUBMENUSService } from './metrofrenos.service';
// import {
//   CreateSYS_SUBMENUSDto,
//   UpdateSYS_SUBMENUSDto,
// } from './dto/metrofrenos.dto';

// import { TABLASService } from './metrofrenos.service';
// import { CreateTABLASDto, UpdateTABLASDto } from './dto/metrofrenos.dto';

// import { TABLAS_DETService } from './metrofrenos.service';
// import {
//   CreateTABLAS_DETDto,
//   UpdateTABLAS_DETDto,
// } from './dto/metrofrenos.dto';

// import { TEMPORADASService } from './metrofrenos.service';
// import {
//   CreateTEMPORADASDto,
//   UpdateTEMPORADASDto,
// } from './dto/metrofrenos.dto';

// import { VENCIMIENTOSService } from './metrofrenos.service';
// import {
//   CreateVENCIMIENTOSDto,
//   UpdateVENCIMIENTOSDto,
// } from './dto/metrofrenos.dto';

// import { VERSIONESService } from './metrofrenos.service';
// import { CreateVERSIONESDto, UpdateVERSIONESDto } from './dto/metrofrenos.dto';

// import { VERSIONESDETService } from './metrofrenos.service';
// import {
//   CreateVERSIONESDETDto,
//   UpdateVERSIONESDETDto,
// } from './dto/metrofrenos.dto';

// import { ZONASService } from './metrofrenos.service';
// import { CreateZONASDto, UpdateZONASDto } from './dto/metrofrenos.dto';

// import { categoriasService } from './metrofrenos.service';
// import {
//   CreatecategoriasDto,
//   UpdatecategoriasDto,
// } from './dto/metrofrenos.dto';

// import { celdasService } from './metrofrenos.service';
// import { CreateceldasDto, UpdateceldasDto } from './dto/metrofrenos.dto';

// import { clientesService } from './metrofrenos.service';
// import { CreateclientesDto, UpdateclientesDto } from './dto/metrofrenos.dto';

// import { conceptosService } from './metrofrenos.service';
// import { CreateconceptosDto, UpdateconceptosDto } from './dto/metrofrenos.dto';

// import { consecutivosService } from './metrofrenos.service';
// import {
//   CreateconsecutivosDto,
//   UpdateconsecutivosDto,
// } from './dto/metrofrenos.dto';

// import { datos_importadosService } from './metrofrenos.service';
// import {
//   Createdatos_importadosDto,
//   Updatedatos_importadosDto,
// } from './dto/metrofrenos.dto';

// import { empresasService } from './metrofrenos.service';
// import { CreateempresasDto, UpdateempresasDto } from './dto/metrofrenos.dto';

// import { grupos_usuariosService } from './metrofrenos.service';
// import {
//   Creategrupos_usuariosDto,
//   Updategrupos_usuariosDto,
// } from './dto/metrofrenos.dto';

// import { kardexService } from './metrofrenos.service';
// import { CreatekardexDto, UpdatekardexDto } from './dto/metrofrenos.dto';

// import { motivosService } from './metrofrenos.service';
// import { CreatemotivosDto, UpdatemotivosDto } from './dto/metrofrenos.dto';

// import { motivos_anulacionService } from './metrofrenos.service';
// import {
//   Createmotivos_anulacionDto,
//   Updatemotivos_anulacionDto,
// } from './dto/metrofrenos.dto';

// import { novimientosService } from './metrofrenos.service';
// import {
//   CreatenovimientosDto,
//   UpdatenovimientosDto,
// } from './dto/metrofrenos.dto';

// import { novimientos_docService } from './metrofrenos.service';
// import {
//   Createnovimientos_docDto,
//   Updatenovimientos_docDto,
// } from './dto/metrofrenos.dto';

// import { novimientos_vehService } from './metrofrenos.service';
// import {
//   Createnovimientos_vehDto,
//   Updatenovimientos_vehDto,
// } from './dto/metrofrenos.dto';

// import { pedidosService } from './metrofrenos.service';
// import { CreatepedidosDto, UpdatepedidosDto } from './dto/metrofrenos.dto';

// import { pedidos_detService } from './metrofrenos.service';
// import {
//   Createpedidos_detDto,
//   Updatepedidos_detDto,
// } from './dto/metrofrenos.dto';

// import { romboService } from './metrofrenos.service';
// import { CreateromboDto, UpdateromboDto } from './dto/metrofrenos.dto';

// import { see_costo_kwhService } from './metrofrenos.service';
// import {
//   Createsee_costo_kwhDto,
//   Updatesee_costo_kwhDto,
// } from './dto/metrofrenos.dto';

// import { see_datosService } from './metrofrenos.service';
// import { Createsee_datosDto, Updatesee_datosDto } from './dto/metrofrenos.dto';

// import { see_formulasService } from './metrofrenos.service';
// import {
//   Createsee_formulasDto,
//   Updatesee_formulasDto,
// } from './dto/metrofrenos.dto';

// import { see_medicionesService } from './metrofrenos.service';
// import {
//   Createsee_medicionesDto,
//   Updatesee_medicionesDto,
// } from './dto/metrofrenos.dto';

// import { see_periodosService } from './metrofrenos.service';
// import {
//   Createsee_periodosDto,
//   Updatesee_periodosDto,
// } from './dto/metrofrenos.dto';

// import { see_temperaturaService } from './metrofrenos.service';
// import {
//   Createsee_temperaturaDto,
//   Updatesee_temperaturaDto,
// } from './dto/metrofrenos.dto';

// import { see_temperatura_detService } from './metrofrenos.service';
// import {
//   Createsee_temperatura_detDto,
//   Updatesee_temperatura_detDto,
// } from './dto/metrofrenos.dto';

// import { see_variablesService } from './metrofrenos.service';
// import {
//   Createsee_variablesDto,
//   Updatesee_variablesDto,
// } from './dto/metrofrenos.dto';

// import { see_variables_detService } from './metrofrenos.service';
// import {
//   Createsee_variables_detDto,
//   Updatesee_variables_detDto,
// } from './dto/metrofrenos.dto';

// import { serviciosService } from './metrofrenos.service';
// import { CreateserviciosDto, UpdateserviciosDto } from './dto/metrofrenos.dto';

// import { subcategoriasService } from './metrofrenos.service';
// import {
//   CreatesubcategoriasDto,
//   UpdatesubcategoriasDto,
// } from './dto/metrofrenos.dto';

// import { sucurralesService } from './metrofrenos.service';
// import {
//   CreatesucurralesDto,
//   UpdatesucurralesDto,
// } from './dto/metrofrenos.dto';

// import { susuariosService } from './metrofrenos.service';
// import { CreatesusuariosDto, UpdatesusuariosDto } from './dto/metrofrenos.dto';

// import { tecnicosService } from './metrofrenos.service';
// import { CreatetecnicosDto, UpdatetecnicosDto } from './dto/metrofrenos.dto';

// import { tra_categoriasService } from './metrofrenos.service';
// import {
//   Createtra_categoriasDto,
//   Updatetra_categoriasDto,
// } from './dto/metrofrenos.dto';

// import { tra_cilindrajeService } from './metrofrenos.service';
// import {
//   Createtra_cilindrajeDto,
//   Updatetra_cilindrajeDto,
// } from './dto/metrofrenos.dto';

// import { tra_cotizacionService } from './metrofrenos.service';
// import {
//   Createtra_cotizacionDto,
//   Updatetra_cotizacionDto,
// } from './dto/metrofrenos.dto';

// import { tra_cotizacion_detService } from './metrofrenos.service';
// import {
//   Createtra_cotizacion_detDto,
//   Updatetra_cotizacion_detDto,
// } from './dto/metrofrenos.dto';

// import { tra_cotizacion_totService } from './metrofrenos.service';
// import {
//   Createtra_cotizacion_totDto,
//   Updatetra_cotizacion_totDto,
// } from './dto/metrofrenos.dto';

// import { tra_detallesService } from './metrofrenos.service';
// import {
//   Createtra_detallesDto,
//   Updatetra_detallesDto,
// } from './dto/metrofrenos.dto';

// import { tra_fisicoService } from './metrofrenos.service';
// import {
//   Createtra_fisicoDto,
//   Updatetra_fisicoDto,
// } from './dto/metrofrenos.dto';

// import { tra_grupposService } from './metrofrenos.service';
// import {
//   Createtra_grupposDto,
//   Updatetra_grupposDto,
// } from './dto/metrofrenos.dto';

// import { tra_marcasService } from './metrofrenos.service';
// import {
//   Createtra_marcasDto,
//   Updatetra_marcasDto,
// } from './dto/metrofrenos.dto';

// import { tra_matriculasService } from './metrofrenos.service';
// import {
//   Createtra_matriculasDto,
//   Updatetra_matriculasDto,
// } from './dto/metrofrenos.dto';

// import { tra_matriculas_carService } from './metrofrenos.service';
// import {
//   Createtra_matriculas_carDto,
//   Updatetra_matriculas_carDto,
// } from './dto/metrofrenos.dto';

// import { tra_matriculas_detService } from './metrofrenos.service';
// import {
//   Createtra_matriculas_detDto,
//   Updatetra_matriculas_detDto,
// } from './dto/metrofrenos.dto';

// import { tra_modelosService } from './metrofrenos.service';
// import {
//   Createtra_modelosDto,
//   Updatetra_modelosDto,
// } from './dto/metrofrenos.dto';

// import { tra_movtosService } from './metrofrenos.service';
// import {
//   Createtra_movtosDto,
//   Updatetra_movtosDto,
// } from './dto/metrofrenos.dto';

// import { tra_movtos_detService } from './metrofrenos.service';
// import {
//   Createtra_movtos_detDto,
//   Updatetra_movtos_detDto,
// } from './dto/metrofrenos.dto';

// import { tra_movtos_totService } from './metrofrenos.service';
// import {
//   Createtra_movtos_totDto,
//   Updatetra_movtos_totDto,
// } from './dto/metrofrenos.dto';

// import { tra_partesService } from './metrofrenos.service';
// import {
//   Createtra_partesDto,
//   Updatetra_partesDto,
// } from './dto/metrofrenos.dto';

// import { tra_periodosService } from './metrofrenos.service';
// import {
//   Createtra_periodosDto,
//   Updatetra_periodosDto,
// } from './dto/metrofrenos.dto';

// import { tra_plantillasService } from './metrofrenos.service';
// import {
//   Createtra_plantillasDto,
//   Updatetra_plantillasDto,
// } from './dto/metrofrenos.dto';

// import { tra_plantillas_detService } from './metrofrenos.service';
// import {
//   Createtra_plantillas_detDto,
//   Updatetra_plantillas_detDto,
// } from './dto/metrofrenos.dto';

// import { tra_posicionesService } from './metrofrenos.service';
// import {
//   Createtra_posicionesDto,
//   Updatetra_posicionesDto,
// } from './dto/metrofrenos.dto';

// import { tra_procesosService } from './metrofrenos.service';
// import {
//   Createtra_procesosDto,
//   Updatetra_procesosDto,
// } from './dto/metrofrenos.dto';

// import { tra_procesos_tiemposService } from './metrofrenos.service';
// import {
//   Createtra_procesos_tiemposDto,
//   Updatetra_procesos_tiemposDto,
// } from './dto/metrofrenos.dto';

// import { tra_procesos_tiempos_coloresService } from './metrofrenos.service';
// import {
//   Createtra_procesos_tiempos_coloresDto,
//   Updatetra_procesos_tiempos_coloresDto,
// } from './dto/metrofrenos.dto';

// import { tra_referenciasService } from './metrofrenos.service';
// import {
//   Createtra_referenciasDto,
//   Updatetra_referenciasDto,
// } from './dto/metrofrenos.dto';

// import { tra_referencias_proveedorService } from './metrofrenos.service';
// import {
//   Createtra_referencias_proveedorDto,
//   Updatetra_referencias_proveedorDto,
// } from './dto/metrofrenos.dto';

// import { tra_saldosService } from './metrofrenos.service';
// import {
//   Createtra_saldosDto,
//   Updatetra_saldosDto,
// } from './dto/metrofrenos.dto';

// import { tra_sjustesService } from './metrofrenos.service';
// import {
//   Createtra_sjustesDto,
//   Updatetra_sjustesDto,
// } from './dto/metrofrenos.dto';

// import { tra_tipo_motorService } from './metrofrenos.service';
// import {
//   Createtra_tipo_motorDto,
//   Updatetra_tipo_motorDto,
// } from './dto/metrofrenos.dto';

// import { tra_tipos_vehService } from './metrofrenos.service';
// import {
//   Createtra_tipos_vehDto,
//   Updatetra_tipos_vehDto,
// } from './dto/metrofrenos.dto';

// import { tra_ubicacionesService } from './metrofrenos.service';
// import {
//   Createtra_ubicacionesDto,
//   Updatetra_ubicacionesDto,
// } from './dto/metrofrenos.dto';

// import { usuariosService } from './metrofrenos.service';
// import { CreateusuariosDto, UpdateusuariosDto } from './dto/metrofrenos.dto';

// import { usuarios1Service } from './metrofrenos.service';
// import { Createusuarios1Dto, Updateusuarios1Dto } from './dto/metrofrenos.dto';

// import { vehiculosService } from './metrofrenos.service';
// import { CreatevehiculosDto, UpdatevehiculosDto } from './dto/metrofrenos.dto';

// @ApiTags('Sga')
// @Controller('sga/atributos')
// export class atributosController {
//   constructor(private readonly docService: ATRIBUTOSService) {}

//   @Post()
//   createATRIBUTOS(
//     @Body() dto: CreateATRIBUTOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateATRIBUTOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/citas')
// export class citasController {
//   constructor(private readonly docService: CITASService) {}

//   @Post()
//   createCITAS(@Body() dto: CreateCITASDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCITASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/claves')
// export class clavesController {
//   constructor(private readonly docService: CLAVESService) {}

//   @Post()
//   createCLAVES(@Body() dto: CreateCLAVESDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCLAVESDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/colecciones')
// export class coleccionesController {
//   constructor(private readonly docService: COLECCIONESService) {}

//   @Post()
//   createCOLECCIONES(
//     @Body() dto: CreateCOLECCIONESDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCOLECCIONESDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config')
// export class configController {
//   constructor(private readonly docService: CONFIGService) {}

//   @Post()
//   createCONFIG(@Body() dto: CreateCONFIGDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_autogestion')
// export class config_autogestionController {
//   constructor(private readonly docService: CONFIGAUTOGESTIONService) {}

//   @Post()
//   createCONFIGAUTOGESTION(
//     @Body() dto: CreateCONFIGAUTOGESTIONDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGAUTOGESTIONDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_bd')
// export class config_bdController {
//   constructor(private readonly docService: CONFIGBDService) {}

//   @Post()
//   createCONFIGBD(@Body() dto: CreateCONFIGBDDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGBDDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_cabeza')
// export class config_cabezaController {
//   constructor(private readonly docService: CONFIGCABEZAService) {}

//   @Post()
//   createCONFIGCABEZA(
//     @Body() dto: CreateCONFIGCABEZADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGCABEZADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_captura')
// export class config_capturaController {
//   constructor(private readonly docService: CONFIGCAPTURAService) {}

//   @Post()
//   createCONFIGCAPTURA(
//     @Body() dto: CreateCONFIGCAPTURADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGCAPTURADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_captura_det')
// export class config_captura_detController {
//   constructor(private readonly docService: CONFIGCAPTURADETService) {}

//   @Post()
//   createCONFIGCAPTURADET(
//     @Body() dto: CreateCONFIGCAPTURADETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGCAPTURADETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_cotiza')
// export class config_cotizaController {
//   constructor(private readonly docService: CONFIGCOTIZAService) {}

//   @Post()
//   createCONFIGCOTIZA(
//     @Body() dto: CreateCONFIGCOTIZADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGCOTIZADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_detalle')
// export class config_detalleController {
//   constructor(private readonly docService: CONFIGDETALLEService) {}

//   @Post()
//   createCONFIGDETALLE(
//     @Body() dto: CreateCONFIGDETALLEDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGDETALLEDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_documento')
// export class config_documentoController {
//   constructor(private readonly docService: CONFIGDOCUMENTOService) {}

//   @Post()
//   createCONFIGDOCUMENTO(
//     @Body() dto: CreateCONFIGDOCUMENTODto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGDOCUMENTODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_formulario')
// export class config_formularioController {
//   constructor(private readonly docService: CONFIGFORMULARIOService) {}

//   @Post()
//   createCONFIGFORMULARIO(
//     @Body() dto: CreateCONFIGFORMULARIODto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGFORMULARIODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_kardex')
// export class config_kardexController {
//   constructor(private readonly docService: CONFIGKARDEXService) {}

//   @Post()
//   createCONFIGKARDEX(
//     @Body() dto: CreateCONFIGKARDEXDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGKARDEXDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_qr')
// export class config_qrController {
//   constructor(private readonly docService: CONFIGQRService) {}

//   @Post()
//   createCONFIGQR(@Body() dto: CreateCONFIGQRDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGQRDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_qr_det')
// export class config_qr_detController {
//   constructor(private readonly docService: CONFIGQRDETService) {}

//   @Post()
//   createCONFIGQRDET(
//     @Body() dto: CreateCONFIGQRDETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGQRDETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_rel')
// export class config_relController {
//   constructor(private readonly docService: CONFIGRELService) {}

//   @Post()
//   createCONFIGREL(
//     @Body() dto: CreateCONFIGRELDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGRELDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_table')
// export class config_tableController {
//   constructor(private readonly docService: CONFIGTABLEService) {}

//   @Post()
//   createCONFIGTABLE(
//     @Body() dto: CreateCONFIGTABLEDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGTABLEDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_targeta')
// export class config_targetaController {
//   constructor(private readonly docService: CONFIGTARGETAService) {}

//   @Post()
//   createCONFIGTARGETA(
//     @Body() dto: CreateCONFIGTARGETADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGTARGETADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_ubicacion')
// export class config_ubicacionController {
//   constructor(private readonly docService: CONFIGUBICACIONService) {}

//   @Post()
//   createCONFIGUBICACION(
//     @Body() dto: CreateCONFIGUBICACIONDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGUBICACIONDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_vista')
// export class config_vistaController {
//   constructor(private readonly docService: CONFIGVISTAService) {}

//   @Post()
//   createCONFIGVISTA(
//     @Body() dto: CreateCONFIGVISTADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGVISTADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_vistat')
// export class config_vistatController {
//   constructor(private readonly docService: CONFIGVISTATService) {}

//   @Post()
//   createCONFIGVISTAT(
//     @Body() dto: CreateCONFIGVISTATDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGVISTATDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_zonas')
// export class config_zonasController {
//   constructor(private readonly docService: CONFIGZONASService) {}

//   @Post()
//   createCONFIGZONAS(
//     @Body() dto: CreateCONFIGZONASDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIGZONASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_citas')
// export class config_citasController {
//   constructor(private readonly docService: CONFIG_CITASService) {}

//   @Post()
//   createCONFIG_CITAS(
//     @Body() dto: CreateCONFIG_CITASDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIG_CITASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/config_encuesta')
// export class config_encuestaController {
//   constructor(private readonly docService: CONFIG_ENCUESTAService) {}

//   @Post()
//   createCONFIG_ENCUESTA(
//     @Body() dto: CreateCONFIG_ENCUESTADto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONFIG_ENCUESTADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos')
// export class contenidosController {
//   constructor(private readonly docService: CONTENIDOSService) {}

//   @Post()
//   createCONTENIDOS(
//     @Body() dto: CreateCONTENIDOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_cap')
// export class contenidos_capController {
//   constructor(private readonly docService: CONTENIDOS_CAPService) {}

//   @Post()
//   createCONTENIDOS_CAP(
//     @Body() dto: CreateCONTENIDOS_CAPDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_CAPDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_det')
// export class contenidos_detController {
//   constructor(private readonly docService: CONTENIDOS_DETService) {}

//   @Post()
//   createCONTENIDOS_DET(
//     @Body() dto: CreateCONTENIDOS_DETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_DETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_pro')
// export class contenidos_proController {
//   constructor(private readonly docService: CONTENIDOS_PROService) {}

//   @Post()
//   createCONTENIDOS_PRO(
//     @Body() dto: CreateCONTENIDOS_PRODto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_PRODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_rec')
// export class contenidos_recController {
//   constructor(private readonly docService: CONTENIDOS_RECService) {}

//   @Post()
//   createCONTENIDOS_REC(
//     @Body() dto: CreateCONTENIDOS_RECDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_RECDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_sub')
// export class contenidos_subController {
//   constructor(private readonly docService: CONTENIDOS_SUBService) {}

//   @Post()
//   createCONTENIDOS_SUB(
//     @Body() dto: CreateCONTENIDOS_SUBDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_SUBDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_tsk')
// export class contenidos_tskController {
//   constructor(private readonly docService: CONTENIDOS_TSKService) {}

//   @Post()
//   createCONTENIDOS_TSK(
//     @Body() dto: CreateCONTENIDOS_TSKDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_TSKDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/contenidos_usr')
// export class contenidos_usrController {
//   constructor(private readonly docService: CONTENIDOS_USRService) {}

//   @Post()
//   createCONTENIDOS_USR(
//     @Body() dto: CreateCONTENIDOS_USRDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCONTENIDOS_USRDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/cuestionarios')
// export class cuestionariosController {
//   constructor(private readonly docService: CUESTIONARIOSService) {}

//   @Post()
//   createCUESTIONARIOS(
//     @Body() dto: CreateCUESTIONARIOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCUESTIONARIOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/cuestionarios_p')
// export class cuestionarios_pController {
//   constructor(private readonly docService: CUESTIONARIOS_PService) {}

//   @Post()
//   createCUESTIONARIOS_P(
//     @Body() dto: CreateCUESTIONARIOS_PDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCUESTIONARIOS_PDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/cuestionarios_r')
// export class cuestionarios_rController {
//   constructor(private readonly docService: CUESTIONARIOS_RService) {}

//   @Post()
//   createCUESTIONARIOS_R(
//     @Body() dto: CreateCUESTIONARIOS_RDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateCUESTIONARIOS_RDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/dep_equipos')
// export class dep_equiposController {
//   constructor(private readonly docService: DEP_EQUIPOSService) {}

//   @Post()
//   createDEP_EQUIPOS(
//     @Body() dto: CreateDEP_EQUIPOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateDEP_EQUIPOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/detalle_celdas')
// export class detalle_celdasController {
//   constructor(private readonly docService: DETALLE_CELDASService) {}

//   @Post()
//   createDETALLE_CELDAS(
//     @Body() dto: CreateDETALLE_CELDASDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateDETALLE_CELDASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/dtn_tiempo')
// export class dtn_tiempoController {
//   constructor(private readonly docService: DTN_TIEMPOService) {}

//   @Post()
//   createDTN_TIEMPO(
//     @Body() dto: CreateDTN_TIEMPODto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateDTN_TIEMPODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/encuesta')
// export class encuestaController {
//   constructor(private readonly docService: ENCUESTAService) {}

//   @Post()
//   createENCUESTA(@Body() dto: CreateENCUESTADto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateENCUESTADto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/mercado')
// export class mercadoController {
//   constructor(private readonly docService: MERCADOService) {}

//   @Post()
//   createMERCADO(@Body() dto: CreateMERCADODto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateMERCADODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/mercado_det')
// export class mercado_detController {
//   constructor(private readonly docService: MERCADO_DETService) {}

//   @Post()
//   createMERCADO_DET(
//     @Body() dto: CreateMERCADO_DETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateMERCADO_DETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/nichos')
// export class nichosController {
//   constructor(private readonly docService: NICHOSService) {}

//   @Post()
//   createNICHOS(@Body() dto: CreateNICHOSDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateNICHOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/oreparacion1_2000')
// export class oreparacion1_2000Controller {
//   constructor(private readonly docService: OREPARACION1_2000Service) {}

//   @Post()
//   createOREPARACION1_2000(
//     @Body() dto: CreateOREPARACION1_2000Dto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateOREPARACION1_2000Dto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/oreparacion2_2000')
// export class oreparacion2_2000Controller {
//   constructor(private readonly docService: OREPARACION2_2000Service) {}

//   @Post()
//   createOREPARACION2_2000(
//     @Body() dto: CreateOREPARACION2_2000Dto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateOREPARACION2_2000Dto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/preguntas')
// export class preguntasController {
//   constructor(private readonly docService: PREGUNTASService) {}

//   @Post()
//   createPREGUNTAS(
//     @Body() dto: CreatePREGUNTASDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatePREGUNTASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/presupuestos')
// export class presupuestosController {
//   constructor(private readonly docService: PRESUPUESTOSService) {}

//   @Post()
//   createPRESUPUESTOS(
//     @Body() dto: CreatePRESUPUESTOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatePRESUPUESTOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/sys_apps')
// export class sys_appsController {
//   constructor(private readonly docService: SYS_APPSService) {}

//   @Post()
//   createSYS_APPS(@Body() dto: CreateSYS_APPSDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateSYS_APPSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/sys_roles')
// export class sys_rolesController {
//   constructor(private readonly docService: SYS_ROLESService) {}

//   @Post()
//   createSYS_ROLES(
//     @Body() dto: CreateSYS_ROLESDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateSYS_ROLESDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/sys_rol_campo')
// export class sys_rol_campoController {
//   constructor(private readonly docService: SYS_ROL_CAMPOService) {}

//   @Post()
//   createSYS_ROL_CAMPO(
//     @Body() dto: CreateSYS_ROL_CAMPODto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateSYS_ROL_CAMPODto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/sys_submenus')
// export class sys_submenusController {
//   constructor(private readonly docService: SYS_SUBMENUSService) {}

//   @Post()
//   createSYS_SUBMENUS(
//     @Body() dto: CreateSYS_SUBMENUSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateSYS_SUBMENUSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tablas')
// export class tablasController {
//   constructor(private readonly docService: TABLASService) {}

//   @Post()
//   createTABLAS(@Body() dto: CreateTABLASDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateTABLASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tablas_det')
// export class tablas_detController {
//   constructor(private readonly docService: TABLAS_DETService) {}

//   @Post()
//   createTABLAS_DET(
//     @Body() dto: CreateTABLAS_DETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateTABLAS_DETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/temporadas')
// export class temporadasController {
//   constructor(private readonly docService: TEMPORADASService) {}

//   @Post()
//   createTEMPORADAS(
//     @Body() dto: CreateTEMPORADASDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateTEMPORADASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/vencimientos')
// export class vencimientosController {
//   constructor(private readonly docService: VENCIMIENTOSService) {}

//   @Post()
//   createVENCIMIENTOS(
//     @Body() dto: CreateVENCIMIENTOSDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateVENCIMIENTOSDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/versiones')
// export class versionesController {
//   constructor(private readonly docService: VERSIONESService) {}

//   @Post()
//   createVERSIONES(
//     @Body() dto: CreateVERSIONESDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateVERSIONESDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/versiones_det')
// export class versiones_detController {
//   constructor(private readonly docService: VERSIONESDETService) {}

//   @Post()
//   createVERSIONESDET(
//     @Body() dto: CreateVERSIONESDETDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateVERSIONESDETDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/zonas')
// export class zonasController {
//   constructor(private readonly docService: ZONASService) {}

//   @Post()
//   createZONAS(@Body() dto: CreateZONASDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateZONASDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/categorias')
// export class categoriasController {
//   constructor(private readonly docService: categoriasService) {}

//   @Post()
//   createcategorias(
//     @Body() dto: CreatecategoriasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatecategoriasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/celdas')
// export class celdasController {
//   constructor(private readonly docService: celdasService) {}

//   @Post()
//   createceldas(@Body() dto: CreateceldasDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateceldasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/clientes')
// export class clientesController {
//   constructor(private readonly docService: clientesService) {}

//   @Post()
//   createclientes(@Body() dto: CreateclientesDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateclientesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/conceptos')
// export class conceptosController {
//   constructor(private readonly docService: conceptosService) {}

//   @Post()
//   createconceptos(
//     @Body() dto: CreateconceptosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateconceptosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/consecutivos')
// export class consecutivosController {
//   constructor(private readonly docService: consecutivosService) {}

//   @Post()
//   createconsecutivos(
//     @Body() dto: CreateconsecutivosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateconsecutivosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/datos_importados')
// export class datos_importadosController {
//   constructor(private readonly docService: datos_importadosService) {}

//   @Post()
//   createdatos_importados(
//     @Body() dto: Createdatos_importadosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatedatos_importadosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/empresas')
// export class empresasController {
//   constructor(private readonly docService: empresasService) {}

//   @Post()
//   createempresas(@Body() dto: CreateempresasDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateempresasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/grupos_usuarios')
// export class grupos_usuariosController {
//   constructor(private readonly docService: grupos_usuariosService) {}

//   @Post()
//   creategrupos_usuarios(
//     @Body() dto: Creategrupos_usuariosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updategrupos_usuariosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/kardex')
// export class kardexController {
//   constructor(private readonly docService: kardexService) {}

//   @Post()
//   createkardex(@Body() dto: CreatekardexDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Get('/filter')
//   filter(@Headers('key') key: string, @Body() dto: FilterkardexDto) {
//     return this.docService.filter(dto, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatekardexDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/motivos')
// export class motivosController {
//   constructor(private readonly docService: motivosService) {}

//   @Post()
//   createmotivos(@Body() dto: CreatemotivosDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatemotivosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/motivos_anulacion')
// export class motivos_anulacionController {
//   constructor(private readonly docService: motivos_anulacionService) {}

//   @Post()
//   createmotivos_anulacion(
//     @Body() dto: Createmotivos_anulacionDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatemotivos_anulacionDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/novimientos')
// export class novimientosController {
//   constructor(private readonly docService: novimientosService) {}

//   @Post()
//   createnovimientos(
//     @Body() dto: CreatenovimientosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatenovimientosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/novimientos_doc')
// export class novimientos_docController {
//   constructor(private readonly docService: novimientos_docService) {}

//   @Post()
//   createnovimientos_doc(
//     @Body() dto: Createnovimientos_docDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatenovimientos_docDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/novimientos_veh')
// export class novimientos_vehController {
//   constructor(private readonly docService: novimientos_vehService) {}

//   @Post()
//   createnovimientos_veh(
//     @Body() dto: Createnovimientos_vehDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatenovimientos_vehDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/pedidos')
// export class pedidosController {
//   constructor(private readonly docService: pedidosService) {}

//   @Post()
//   createpedidos(@Body() dto: CreatepedidosDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatepedidosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/pedidos_det')
// export class pedidos_detController {
//   constructor(private readonly docService: pedidos_detService) {}

//   @Post()
//   createpedidos_det(
//     @Body() dto: Createpedidos_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatepedidos_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/rombo')
// export class romboController {
//   constructor(private readonly docService: romboService) {}

//   @Post()
//   createrombo(@Body() dto: CreateromboDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateromboDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_costo_kwh')
// export class see_costo_kwhController {
//   constructor(private readonly docService: see_costo_kwhService) {}

//   @Post()
//   createsee_costo_kwh(
//     @Body() dto: Createsee_costo_kwhDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_costo_kwhDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_datos')
// export class see_datosController {
//   constructor(private readonly docService: see_datosService) {}

//   @Post()
//   createsee_datos(
//     @Body() dto: Createsee_datosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_datosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_formulas')
// export class see_formulasController {
//   constructor(private readonly docService: see_formulasService) {}

//   @Post()
//   createsee_formulas(
//     @Body() dto: Createsee_formulasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_formulasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_mediciones')
// export class see_medicionesController {
//   constructor(private readonly docService: see_medicionesService) {}

//   @Post()
//   createsee_mediciones(
//     @Body() dto: Createsee_medicionesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_medicionesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_periodos')
// export class see_periodosController {
//   constructor(private readonly docService: see_periodosService) {}

//   @Post()
//   createsee_periodos(
//     @Body() dto: Createsee_periodosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_periodosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_temperatura')
// export class see_temperaturaController {
//   constructor(private readonly docService: see_temperaturaService) {}

//   @Post()
//   createsee_temperatura(
//     @Body() dto: Createsee_temperaturaDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_temperaturaDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_temperatura_det')
// export class see_temperatura_detController {
//   constructor(private readonly docService: see_temperatura_detService) {}

//   @Post()
//   createsee_temperatura_det(
//     @Body() dto: Createsee_temperatura_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_temperatura_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_variables')
// export class see_variablesController {
//   constructor(private readonly docService: see_variablesService) {}

//   @Post()
//   createsee_variables(
//     @Body() dto: Createsee_variablesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_variablesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/see_variables_det')
// export class see_variables_detController {
//   constructor(private readonly docService: see_variables_detService) {}

//   @Post()
//   createsee_variables_det(
//     @Body() dto: Createsee_variables_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatesee_variables_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/servicios')
// export class serviciosController {
//   constructor(private readonly docService: serviciosService) {}

//   @Post()
//   createservicios(
//     @Body() dto: CreateserviciosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateserviciosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/subcategorias')
// export class subcategoriasController {
//   constructor(private readonly docService: subcategoriasService) {}

//   @Post()
//   createsubcategorias(
//     @Body() dto: CreatesubcategoriasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatesubcategoriasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/sucurrales')
// export class sucurralesController {
//   constructor(private readonly docService: sucurralesService) {}

//   @Post()
//   createsucurrales(
//     @Body() dto: CreatesucurralesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatesucurralesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/susuarios')
// export class susuariosController {
//   constructor(private readonly docService: susuariosService) {}

//   @Post()
//   createsusuarios(
//     @Body() dto: CreatesusuariosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatesusuariosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tecnicos')
// export class tecnicosController {
//   constructor(private readonly docService: tecnicosService) {}

//   @Post()
//   createtecnicos(@Body() dto: CreatetecnicosDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatetecnicosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_categorias')
// export class tra_categoriasController {
//   constructor(private readonly docService: tra_categoriasService) {}

//   @Post()
//   createtra_categorias(
//     @Body() dto: Createtra_categoriasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_categoriasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_cilindraje')
// export class tra_cilindrajeController {
//   constructor(private readonly docService: tra_cilindrajeService) {}

//   @Post()
//   createtra_cilindraje(
//     @Body() dto: Createtra_cilindrajeDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_cilindrajeDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_cotizacion')
// export class tra_cotizacionController {
//   constructor(private readonly docService: tra_cotizacionService) {}

//   @Post()
//   createtra_cotizacion(
//     @Body() dto: Createtra_cotizacionDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_cotizacionDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_cotizacion_det')
// export class tra_cotizacion_detController {
//   constructor(private readonly docService: tra_cotizacion_detService) {}

//   @Post()
//   createtra_cotizacion_det(
//     @Body() dto: Createtra_cotizacion_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_cotizacion_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_cotizacion_tot')
// export class tra_cotizacion_totController {
//   constructor(private readonly docService: tra_cotizacion_totService) {}

//   @Post()
//   createtra_cotizacion_tot(
//     @Body() dto: Createtra_cotizacion_totDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_cotizacion_totDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_detalles')
// export class tra_detallesController {
//   constructor(private readonly docService: tra_detallesService) {}

//   @Post()
//   createtra_detalles(
//     @Body() dto: Createtra_detallesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_detallesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_fisico')
// export class tra_fisicoController {
//   constructor(private readonly docService: tra_fisicoService) {}

//   @Post()
//   createtra_fisico(
//     @Body() dto: Createtra_fisicoDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_fisicoDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_gruppos')
// export class tra_grupposController {
//   constructor(private readonly docService: tra_grupposService) {}

//   @Post()
//   createtra_gruppos(
//     @Body() dto: Createtra_grupposDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_grupposDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_marcas')
// export class tra_marcasController {
//   constructor(private readonly docService: tra_marcasService) {}

//   @Post()
//   createtra_marcas(
//     @Body() dto: Createtra_marcasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_marcasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_matriculas')
// export class tra_matriculasController {
//   constructor(private readonly docService: tra_matriculasService) {}

//   @Post()
//   createtra_matriculas(
//     @Body() dto: Createtra_matriculasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_matriculasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_matriculas_car')
// export class tra_matriculas_carController {
//   constructor(private readonly docService: tra_matriculas_carService) {}

//   @Post()
//   createtra_matriculas_car(
//     @Body() dto: Createtra_matriculas_carDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_matriculas_carDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_matriculas_det')
// export class tra_matriculas_detController {
//   constructor(private readonly docService: tra_matriculas_detService) {}

//   @Post()
//   createtra_matriculas_det(
//     @Body() dto: Createtra_matriculas_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_matriculas_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_modelos')
// export class tra_modelosController {
//   constructor(private readonly docService: tra_modelosService) {}

//   @Post()
//   createtra_modelos(
//     @Body() dto: Createtra_modelosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_modelosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_movtos')
// export class tra_movtosController {
//   constructor(private readonly docService: tra_movtosService) {}

//   @Post()
//   createtra_movtos(
//     @Body() dto: Createtra_movtosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_movtosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_movtos_det')
// export class tra_movtos_detController {
//   constructor(private readonly docService: tra_movtos_detService) {}

//   @Post()
//   createtra_movtos_det(
//     @Body() dto: Createtra_movtos_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_movtos_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_movtos_tot')
// export class tra_movtos_totController {
//   constructor(private readonly docService: tra_movtos_totService) {}

//   @Post()
//   createtra_movtos_tot(
//     @Body() dto: Createtra_movtos_totDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_movtos_totDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_partes')
// export class tra_partesController {
//   constructor(private readonly docService: tra_partesService) {}

//   @Post()
//   createtra_partes(
//     @Body() dto: Createtra_partesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_partesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_periodos')
// export class tra_periodosController {
//   constructor(private readonly docService: tra_periodosService) {}

//   @Post()
//   createtra_periodos(
//     @Body() dto: Createtra_periodosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_periodosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_plantillas')
// export class tra_plantillasController {
//   constructor(private readonly docService: tra_plantillasService) {}

//   @Post()
//   createtra_plantillas(
//     @Body() dto: Createtra_plantillasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_plantillasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_plantillas_det')
// export class tra_plantillas_detController {
//   constructor(private readonly docService: tra_plantillas_detService) {}

//   @Post()
//   createtra_plantillas_det(
//     @Body() dto: Createtra_plantillas_detDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_plantillas_detDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_posiciones')
// export class tra_posicionesController {
//   constructor(private readonly docService: tra_posicionesService) {}

//   @Post()
//   createtra_posiciones(
//     @Body() dto: Createtra_posicionesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_posicionesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_procesos')
// export class tra_procesosController {
//   constructor(private readonly docService: tra_procesosService) {}

//   @Post()
//   createtra_procesos(
//     @Body() dto: Createtra_procesosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_procesosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_procesos_tiempos')
// export class tra_procesos_tiemposController {
//   constructor(private readonly docService: tra_procesos_tiemposService) {}

//   @Post()
//   createtra_procesos_tiempos(
//     @Body() dto: Createtra_procesos_tiemposDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_procesos_tiemposDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_procesos_tiempos_colores')
// export class tra_procesos_tiempos_coloresController {
//   constructor(
//     private readonly docService: tra_procesos_tiempos_coloresService,
//   ) {}

//   @Post()
//   createtra_procesos_tiempos_colores(
//     @Body() dto: Createtra_procesos_tiempos_coloresDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_procesos_tiempos_coloresDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_referencias')
// export class tra_referenciasController {
//   constructor(private readonly docService: tra_referenciasService) {}

//   @Post()
//   createtra_referencias(
//     @Body() dto: Createtra_referenciasDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_referenciasDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_referencias_proveedor')
// export class tra_referencias_proveedorController {
//   constructor(private readonly docService: tra_referencias_proveedorService) {}

//   @Post()
//   createtra_referencias_proveedor(
//     @Body() dto: Createtra_referencias_proveedorDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_referencias_proveedorDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_saldos')
// export class tra_saldosController {
//   constructor(private readonly docService: tra_saldosService) {}

//   @Post()
//   createtra_saldos(
//     @Body() dto: Createtra_saldosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_saldosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_sjustes')
// export class tra_sjustesController {
//   constructor(private readonly docService: tra_sjustesService) {}

//   @Post()
//   createtra_sjustes(
//     @Body() dto: Createtra_sjustesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_sjustesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_tipo_motor')
// export class tra_tipo_motorController {
//   constructor(private readonly docService: tra_tipo_motorService) {}

//   @Post()
//   createtra_tipo_motor(
//     @Body() dto: Createtra_tipo_motorDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_tipo_motorDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_tipos_veh')
// export class tra_tipos_vehController {
//   constructor(private readonly docService: tra_tipos_vehService) {}

//   @Post()
//   createtra_tipos_veh(
//     @Body() dto: Createtra_tipos_vehDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_tipos_vehDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/tra_ubicaciones')
// export class tra_ubicacionesController {
//   constructor(private readonly docService: tra_ubicacionesService) {}

//   @Post()
//   createtra_ubicaciones(
//     @Body() dto: Createtra_ubicacionesDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updatetra_ubicacionesDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/usuarios')
// export class usuariosController {
//   constructor(private readonly docService: usuariosService) {}

//   @Post()
//   createusuarios(@Body() dto: CreateusuariosDto, @Headers('key') key: string) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdateusuariosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/usuarios1')
// export class usuarios1Controller {
//   constructor(private readonly docService: usuarios1Service) {}

//   @Post()
//   createusuarios1(
//     @Body() dto: Createusuarios1Dto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: Updateusuarios1Dto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }

// @ApiTags('Sga')
// @Controller('sga/vehiculos')
// export class vehiculosController {
//   constructor(private readonly docService: vehiculosService) {}

//   @Post()
//   createvehiculos(
//     @Body() dto: CreatevehiculosDto,
//     @Headers('key') key: string,
//   ) {
//     return this.docService.create(dto, key);
//   }

//   @Get()
//   getAll(@Headers('key') key: string) {
//     return this.docService.findAll(key);
//   }

//   @Get('/by-id')
//   getOne(@Headers('key') key: string, @Query('id') id: string) {
//     return this.docService.findOne(id, key);
//   }

//   @Put()
//   update(
//     @Headers('key') key: string,
//     @Query('id') id: string,
//     @Body() dto: UpdatevehiculosDto,
//   ) {
//     return this.docService.update(id, dto, key);
//   }
// }
